let jaguar = {
  // GUARDA DISNTINTOS TIPOS DE DATOS COMO CLAVES: VALORES/KEY:VALUE
  // A ESTOS VALORES, SE LES CONOCE COMO PROPIEDADES/ATRIBUTOS
  nombre: "Jaguar",
  color: "Amarillo",
  rugir() {
    return "Gruño gruño grrr";
  },
  saludar() {
    return "Hola, me llamo " + this.nombre;
  }
}

console.log(jaguar["nombre"]);
console.log(jaguar.color);
console.log(jaguar.rugir());

console.log(jaguar.saludar());