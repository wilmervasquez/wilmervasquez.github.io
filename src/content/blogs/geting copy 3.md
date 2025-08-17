---
title: Arquitectura hexagonal
image: p2.jpeg

---

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

const app = express();
app.use(express.json());

// Configuramos las rutas
app.post('/users', userController.create);
app.get('/users/:id', userController.get);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```