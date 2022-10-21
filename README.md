## Crud de Pesonas Basico

- Para correr este proyecto debes tener corriendo una base de datos en mysql llamada Personal
e insertar la siguiente tabla 

```sql
CREATE TABLE `Persona` (
  `idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(145) DEFAULT NULL,
  `apellido` varchar(145) DEFAULT NULL,
  `dni` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPersona`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

```