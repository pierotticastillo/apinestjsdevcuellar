<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Una API RESTful para la gestión de productos construida con NestJS, TypeORM y SQL.</p>

## 📜 Descripción

Este proyecto es una API de productos construida utilizando el framework [NestJS](https://github.com/nestjs/nest), con **TypeScript** y **TypeORM** para la gestión de la base de datos **SQL**.

La API permite:
- 🔍 Obtener todos los productos.
- 🔎 Obtener un producto por su ID.
- ➕ Crear un nuevo producto.
- 🔄 Actualizar un producto existente.
- 🗑️ Eliminar un producto.

Además, se proporciona una colección de **Postman** para facilitar su prueba y se siguió el tutorial del canal [devcuellar](https://www.youtube.com/@devcuellar).

---

## 🏗️ Entidad del Producto

La entidad `Products` representa la tabla de productos en la base de datos SQL:

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
```

---

## 🚀 Configuración del Proyecto

### 🔧 Instalación

```bash
$ npm install
```

### ⚡ Ejecución del Proyecto

```bash
# Modo desarrollo
$ npm run start:dev

# Modo producción
$ npm run start:prod
```

### 🧪 Pruebas

```bash
# Pruebas unitarias
$ npm run test

# Pruebas e2e
$ npm run test:e2e

# Cobertura de pruebas
$ npm run test:cov
```

---

## 🌐 Endpoints de la API

| Método | Ruta          | Descripción                      |
| ------ | ------------- | -------------------------------- |
| GET    | `/products`   | Obtener todos los productos       |
| GET    | `/products/:id` | Obtener un producto por ID       |
| POST   | `/products`   | Crear un nuevo producto           |
| PATCH  | `/products/:id` | Actualizar un producto existente |
| DELETE | `/products/:id` | Eliminar un producto             |

---

## 🧩 Tecnologías Utilizadas

- ⚡ **NestJS**: Framework progresivo para Node.js.
- 💾 **TypeORM**: ORM para TypeScript y JavaScript.
- 🏦 **SQL**: Base de datos para persistencia de datos.
- 📫 **Postman**: Colección incluida para probar la API.

---

## 🎥 Recursos

- 📺 Tutorial seguido: [devcuellar](https://www.youtube.com/@devcuellar)
- 📖 [Documentación oficial de NestJS](https://docs.nestjs.com)

---

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://github.com/nestjs/nest/blob/master/LICENSE).

---

✨ **¡Listo para desplegar y probar!** 🚀

