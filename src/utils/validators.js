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
  const isError = errors.length > 0;
  const readLessonCast = {
    ...readLesson,
    vidasTotales: readLesson.vidasTotales
      ? parseInt(readLesson.vidasTotales, 10)
      : undefined,
    puntaje: readLesson.puntaje ? parseInt(readLesson.puntaje, 10) : undefined,
  };
  return { isError, errors, readLessonCast };
};

export const validateCodeLesson = (codeLesson) => {
  const errors = [];
  if (!codeLesson.titulo) {
    errors.push('El titulo es requerido');
  }
  if (!codeLesson.vidasTotales) {
    errors.push('El numero de vidas es requerido');
  }
  if (!codeLesson.puntaje) {
    errors.push('El puntaje es requerido');
  }
  if (!codeLesson.contenido || codeLesson.contenido.length === 0) {
    errors.push('Al menos un item de contenido es requerido');
  }
  if (codeLesson.contenido && codeLesson.contenido.length > 0) {
    if (!codeLesson.contenido[0].valorSolution) {
      errors.push('El código solución es requerido');
    }
  }
  let codeLessonCast;
  const isError = errors.length > 0;
  if (!isError) {
    codeLessonCast = {
      ...codeLesson,
      vidasTotales: parseInt(codeLesson.vidasTotales, 10),
      puntaje: parseInt(codeLesson.puntaje, 10),
    };
  }
  return { isError, errors, codeLessonCast };
};
