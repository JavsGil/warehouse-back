



# Nombre del Proyecto
weathermap-back
## Descripción
Microservicio que se conecta con api de gestion del tiempo.


## Requisitos Previos
- NODE (18.16.0)
- NPM (9.5.1)
- Base de datos (MySQL)

## Pasos para Levantar el Proyecto

1. Clonar el repositorio en tu máquina local

2. El comando `synchronize: true` para la migacion y ejecute 

INSERT INTO `users` (`id`, `email`, `contrasena`, `tipo`) VALUES
(1, 'admin@gmail.com', '$2a$12$WtlTkEQth.4CKKhrXL9d/.fGAzNxdGkik7yGrpmtmGvOxrQ0Dqhli', '1'),
(2, 'externo@gmail.com', '$2a$12$6qPm7cQJjLi4Tee7hMq1WOLKqlc5DCaryIc25HF6kk9IS0DccmY2K', '2');


3. Levantar el servidor local:`npm run start`


4. Si no ejecuto la zincronizacion


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);
