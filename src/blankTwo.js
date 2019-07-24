export default [
    {
        name: 'square',
        bgcolor: 'blue',
        number: 2,
        position: null
    },
    {
        name: 'square',
        bgcolor: 'blue',
        number: 2,
        position: null
    }
]

{this.state.moduleTwo.map((piece, i) => {
    if (piece.name === 'stoplight') {
        return (
                <div 
                    key={i}
                    className={piece.class}
                    onMouseDown={() => this.setState({currentIndex: i})}>
                    <Stoplight/>
                </div>
     )} if (piece.name === 'threebar') {
        return (
            <div 
                key={i}
                className={piece.class}
                onMouseDown={() => this.setState({currentIndex: i})}>
                 <ThreeBar/>
            </div>
        )
    }
})}