import { Component, OnInit } from '@angular/core';
import { Incidentes, TablaIncidentes } from '../../../admin/interfaces/incident.interface';
import { IncidentsService } from '../../services/incidents.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'chd-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  loading: boolean = true;
  incidentes: Incidentes[] = [];
  tablaIncidentes: TablaIncidentes[] = [];

  constructor(private incidentService: IncidentsService) { }

  ngOnInit(): void {
    this.incidentService.getIncident().subscribe(incidentes => {
      this.incidentes = incidentes;
      this.loading = false;
    });
    this.incidentService.getTablaIncident().subscribe(tablaIncidentes => {
      this.tablaIncidentes = tablaIncidentes;
    });
  }

  handleInput(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
     const jsonToExel = this.tablaIncidentes.map(incident => ({
        id: incident.id,
        fecha_identifca: incident.fecha_identifca,
        estado: incident.estado,
        tipo_incidente_fk: incident.tipo_incidente_fk,
        prioridad_resultante: incident.prioridad_resultante,
        unidad_inciente_fk: incident.unidad_inciente_fk,
        tipo_especialidad_fk: incident.tipo_especialidad_fk,
      }));
      const worksheet = xlsx.utils.json_to_sheet<TablaIncidentes>(jsonToExel);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "tablaIncidentes");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
