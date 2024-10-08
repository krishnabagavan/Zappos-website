function Button({title, width, color, background, height, borderRadius, outline, border, fontSize,fontWeight, padding, textDecoration, click}) {
    const style = {
        width: width ? width : '100%',
        color: color ? color :  '#035D73',
        background: background ? background : null,
        borderRadius: borderRadius ? borderRadius : null,
        height: height ? height : null,
        outline: outline ? outline : 'none',
        border: border ? border : null,
        fontSize: fontSize ? fontSize : null,
        fontWeight: fontWeight ? fontWeight : 500,
        padding: padding? padding : "10px 20px",
        textDecoration: textDecoration? textDecoration : null,
    };

    return(
        <button style={style} click={click} className="hover:backdrop-brightness-75">
            {title}
        </button>
    )
}
export default Button