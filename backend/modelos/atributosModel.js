const atributos=[
    {
        "id": 1,
        "competencia": "Identificar, formular y resolver problemas complejos de ingeniería aplicando los principios de ingeniería, ciencias y matemáticas."
    },
    {
        "id": 2,
        "competencia": "Aplicar, analizar y sintetizar procesos de diseño de ingeniería que resulten en proyectos que cumplen las necesidades especificadas."
    },
    {
        "id": 3,
        "competencia": "Desarrollar y conducir experimentación adecuada; analizar e interpretar datos y utilizar el juicio ingenieril para establecer conclusiones."
    },
    {
        "id": 4,
        "competencia": "Comunicarse efectivamente con diferentes audiencias."
    },
    {
        "id": 5,
        "competencia": "Reconocer sus responsabilidades eticas y profesionales en situaciones relevantes para la ingeniería y realizar juicios informados que deben considerar el impacto de las soluciones de ingeniería en los contextos global, económico, ambiental y social."
    },
    {
        "id": 6,
        "competencia": "Reconocer la necesidad permanente de conocimiento adicional y tener la habilidad para localizar, evaluar, integrar y aplicar este conocimiento adecuadamente."
    },
    {
        "id": 7,
        "competencia": "Trabajar efectivamente en equipo que establecen metas, planean tareas, cumplen fechas límites y analizan riesgos e incertidumbre."
    }
];

const getAll = function(){
    return atributos
}
const getById=function(id){
    let regresar=-1
    let contador=0
    atributos.forEach(function(atributo){
        if(atributo.id==id){
            regresar=contador
        }
        contador++
    })
    if(regresar==-1){
        return "Atributo no encontrado"
    }
    else{ 
        return atributos[regresar]
    }
}

module.exports.getAll=getAll;
module.exports.getById=getById;
