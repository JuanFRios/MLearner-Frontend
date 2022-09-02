export const codeLessonInitialvalues = (module) => ({
  titulo: '',
  puntaje: 0,
  vidasTotales: 0,
  tipo: 'CODIGO',
  modulo: module,
  contenido: [
    {
      clave: 'CODIGO',
      valor: 'codigo',
      valorPreExerciseCode: '',
      valorSampleCode: '',
      valorSolution: '',
      valorSCT: '',
      valorHint: '',
    },
  ],
});

export const codeLessonPutInitialvalues = (l, module) => ({
  titulo: l.titulo,
  puntaje: l.puntaje,
  vidasTotales: l.vidasTotales,
  modulo: module,
  tipo: 'CODIGO',
  contenido: [
    {
      clave: 'CODIGO',
      valor: 'codigo',
      valorPreExerciseCode: l.contenido[0].valorPreExerciseCode,
      valorSampleCode: l.contenido[0].valorSampleCode,
      valorSolution: l.contenido[0].valorSolution,
      valorSCT: l.contenido[0].valorSCT,
      valorHint: l.contenido[0].valorHint,
    },
  ],
});

export const quizLessonInitialValues = (module) => ({
  titulo: '',
  puntaje: 0,
  vidasTotales: 0,
  tipo: 'QUIZ',
  modulo: module,
  pregunta: {
    enunciado: '',
    opciones: [],
  },
});

export const quizLessonPutInitialValues = (l, module) => ({
  titulo: l.titulo,
  puntaje: l.puntaje,
  vidasTotales: l.vidasTotales,
  modulo: module,
  tipo: 'QUIZ',
  pregunta: {
    enunciado: l.pregunta.enunciado,
    opciones: l.pregunta.opciones.map((opcion) => ({
      opcion: opcion.opcion,
      esCorrecta: opcion.esCorrecta,
    })),
  },
});

export const readingLessonInitialValues = (module) => ({
  titulo: '',
  puntaje: 0,
  vidasTotales: 0,
  tipo: 'LECTURA',
  modulo: module,
  contenido: [],
});

export const readingLessonPutInitialValues = (l, module) => ({
  titulo: l.titulo,
  puntaje: l.puntaje,
  vidasTotales: l.vidasTotales,
  modulo: module,
  tipo: 'LECTURA',
  contenido: l.contenido,
});
