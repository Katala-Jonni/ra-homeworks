const SearchBoxView = ({fixed}) => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-12">
                    <input
                        className={`search-box ${fixed ? 'search-box_fixed' : null}`}
                        placeholder="Поиск"
                    >
                    </input>
                </div>
            </div>
        </section>
    );
};

