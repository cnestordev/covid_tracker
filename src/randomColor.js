function randomColor() {
        const colorArray = ['FF9AA2', 'FFB7B2', 'FFDAC1', 'E2F0CB', 'B5EAD7', 'C7CEEA', 'a8e6cf', 'dcedc1', 'ffd3b6', 'ffaaa5', 'E1F7D5']
        const num = Math.floor(Math.random() * 11)
        return "#" + colorArray[num]
    }
    
export default randomColor