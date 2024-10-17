
    function mostrarCalendario() {
        document.getElementById('fechainicio').style.display = 'flex';
        document.getElementById('fechafin').style.display = 'flex';
    }

    function mostrarFecha() {
        let desde1 = document.getElementById('fechainicio').value;
        let partesFecha = desde1.split("-");
        let desde = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;
        let hasta1 = document.getElementById('fechafin').value;
        let partesFecha1 = hasta1.split("-");
        let hasta = `${partesFecha1[2]}-${partesFecha1[1]}-${partesFecha1[0]}`;
        let page = `https://www.asturfutbol.es/pnfg/NPcd/NFG_LstPartidos?cod_primaria=1000121&Consulta=1&Sch_Participantes_federados=&lista_competiciones_seleccionadas=&avanzada=&Sch_Fecha_Desde=${desde}&Sch_Fecha_Desde_input=${desde1}&Sch_Fecha_Hasta=${hasta}&Sch_Fecha_Hasta_input=${hasta1}&Sch_Tipo_Participantes=&Sch_Cod_Temporada=20&Sch_Codigo_Tipo_Juego=&Sch_Hora=&Sch_Cod_Agrupacion=&Sch_CodCompeticion=&Sch_CodGrupo=&texto_grupo=&Sch_codacta=&Sch_Clave_Acceso_Club=1168&Club=1168&Sch_Codigo_Equipo=&Sch_Clave_Acceso_Campo=&Campo=&Sch_Acta_Partido=&Sch_Partidos_Jugados=&Ordenacion=&NPcd_PageLines=20`;
        window.location.href = page;    
        }
