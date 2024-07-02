export interface Persona {
  nombre: string;
  edad: number;
  domicilio: {
    calle: string;
    numero: number;
  };
}

export interface Domicilio {
  calle: string;
  numero: number;
}

export type Color = "rojo" | "verde" | "amarillo";
