const TextRenderLine = ({value, onChange}) => {
	const onChangeHandleText = (evt) => {
		const string = evt.currentTarget.value.replace(/[^A-Za-z\n+\s]/g, '');
        onChange(string)
	};
	return (
        <div className="type-text">
            <textarea 
				value={value}
				onChange={onChangeHandleText}
				name="text" 
				id="font-text" 
				cols="30" 
				rows="2" 
				placeholder="Введите текст для футболки">
			</textarea>
        </div>
	);
};
