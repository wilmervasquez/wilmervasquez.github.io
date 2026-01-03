---
title: Arquitectura hexagonal
description: La arquitectura hexagonal es un patrón de diseño que promueve la separación de preocupaciones y la independencia de las tecnologías externas.
image: p2.jpeg
createdAt: 2025-04-03
updatedAt: 2025-04-03
---
# Domain
capabilities 
```typescript
// src/index.ts
import { UserService } from './core/application/UserService';
import { MongoUserRepository } from './adapters/driven/database/MongoUserRepository';
import { UserController } from './adapters/driving/http/UserController';
import express from 'express';

// Inyección de dependencias
const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
```
```typescript
const app = express();
app.use(express.json());

// Configuramos las rutas
app.post('/users', userController.create);
app.get('/users/:id', userController.get);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```