export interface Incidentes{
    id: number;
    fecha_identifca: Date;
    reporta_unida: string;
    estado: string;
    prioridad_resultante: number;
    fecha_tratamiento: Date;
    vulnerabilidades_explo: string;
    tipo_prio_x_esfuerzo_fk: number;
    tipo_incidente_fk: number;
    tipo_vector_ataque_fk: number;
    tipo_clasificacion_fk: number;
    tipo_impacto_funcional_fk: number;
    tipo_priorid_impacto_fk: number;
    tipo_seguri_informacion_fk: number;
    tipo_prior_aten_incidente_fk: number;
    tipo_urgencia_atencion_fk: number;
    unidad_inciente_fk: number;
    tipo_especialidad_fk: number;
    descripcion_incidente: string;
    fuerza_incidente_fk: number;

}