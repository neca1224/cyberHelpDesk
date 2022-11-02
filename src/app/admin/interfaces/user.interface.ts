export interface UserI {
  id: number;
  empleado_fk: number;
  nombre_usuario: number;
  pass: string;
  intentos_login: number;
  codigo_activacion: string;
  activo: boolean;
  REGISTRO_OPENLDAP: boolean;
  FECHA_REGISTRO_OPENLDAP: Date;
}
