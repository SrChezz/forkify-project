import View from './view.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again ;)`;
  _message = `Start by searching for a recipe or an ingredient. Have fun!`;

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
