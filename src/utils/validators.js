export const validateQuizLesson = (quizLesson) => {
  const errors = [];
  if (!quizLesson.titulo) {
    errors.push('El titulo es requerido');
  }
  if (!quizLesson.vidasTotales) {
    errors.push('El numero de vidas es requerido');
  }
  if (!quizLesson.puntaje) {
    errors.push('El puntaje es requerido');
  }
  if (!quizLesson.pregunta?.enunciado) {
    errors.push('El enunciado es requerido');
  }
  if (
    !quizLesson.pregunta.opciones ||
    quizLesson.pregunta.opciones.length === 0
  ) {
    errors.push('Al menos una opcion es requerida');
  }
  let quizLessonCast;
  const isError = errors.length > 0;
  if (!isError) {
    quizLessonCast = {
      ...quizLesson,
      vidasTotales: parseInt(quizLesson.vidasTotales, 10),
      puntaje: parseInt(quizLesson.puntaje, 10),
      pregunta: {
        ...quizLesson.pregunta,
        opciones: quizLesson.pregunta.opciones.map((opcion) => ({
          ...opcion,
          esCorrecta: opcion.esCorrecta === 'true',
        })),
      },
    };
  }
  return { isError, errors, quizLessonCast };
};

export const validateReadingLesson = (readLesson) => {
  const errors = [];
  if (!readLesson.titulo) {
    errors.push('El titulo es requerido');
  }
  if (!readLesson.vidasTotales) {
    errors.push('El numero de vidas es requerido');
  }
  if (!readLesson.puntaje) {
    errors.push('El puntaje es requerido');
  }
  if (!readLesson.contenido || readLesson.contenido.length === 0) {
    errors.push('Al menos un item de contenido es requerido');
  }
  let readLessonCast;
  const isError = errors.length > 0;
  if (!isError) {
    readLessonCast = {
      ...readLesson,
      vidasTotales: parseInt(readLesson.vidasTotales, 10),
      puntaje: parseInt(readLesson.puntaje, 10),
    };
  }
  return { isError, errors, readLessonCast };
};
