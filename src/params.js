import { Dimensions } from 'react-native'

const params = {
    blockSize: 35,
    borderSize: 2,
    fontSize: 15,
    headerRatio: 0.15, // prop header
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params