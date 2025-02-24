import DirectionAwareHover from './direction-aware-hover';

export const provideDirectionAwareHover = () => {
  return {
    provide: DirectionAwareHover,
    useFactory: (options: { inverse: boolean }) =>
      new DirectionAwareHover(options),
  };
};
