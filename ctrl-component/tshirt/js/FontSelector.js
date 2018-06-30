const FontSelector = ({fonts, selectedFont, onSelect}) => {
    const onchangeHandle = (evt) => {
        selectedFont = fonts.find(font => font.name === evt.currentTarget.value);
        onSelect(selectedFont);
    };
    return (
        <div className="font-picker">
            {
                fonts.map((el, idx) => {
                        return (
                            <div className="grid center font-item">
                                <input
                                    value={el.name}
                                    id={el.name}
                                    onChange={onchangeHandle}
                                    type="radio"
                                    name="font"
                                />
                                <label htmlFor={el.name} className="grid-1">
                                    <PictureFont
                                        key={idx}
                                        text={el.name.slice(0, 3)}
                                        path={el.path}
                                    />
                                </label>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
};