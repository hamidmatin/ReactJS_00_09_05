import styles from './fade-show.module.css'

export const fadeShow = (component) => {
  const Component = component;

  return ({ duration, ...props }) => {
    return (
      <div style={{animationDuration: `${duration}ms`}} className={styles['fade']}>
        <Component {...props} />
      </div>
    )
  };
};
