// explanation for the button component is that it is a reusable component that can be used throughout the application. 
// It takes in three props: className, size, and children. 
// The className prop is used to add additional classes to the button, the size prop is used to determine the size of the button, and the children prop is used to render the content inside the button. 
// The baseClasses variable contains the default classes for the button, and the sizeClasses variable contains the classes for each size option. The final classes variable combines the baseClasses, sizeClasses, and any additional classes passed in through the className prop.

export const Button = ({className="", size="default", children, ...props}) => {
    const baseClasses = 
        "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-lg shadow-primary/25";
   
    const sizeClasses = {
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3",
        lg:"px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
        <span className="relative flex items-center justify-center gap-2">
            {children}
        </span>
    </button>
  )
}
