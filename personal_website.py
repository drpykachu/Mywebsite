from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Biography/')
def Biography():
     return render_template('Biography.html')


if __name__ == '__main__':
    app.run(debug=True,port = 8000,host = '0.0.0.0')
# i think this is good 2
