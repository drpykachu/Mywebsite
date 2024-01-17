from flask import Flask, render_template
from flask_talisman import Talisman

app = Flask(__name__)
talisman = Talisman(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/publications/')
def publications():
     return render_template('publications_tab.html')

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0',port=8000)
# i think this is good
