from flask import Flask, render_template, redirect

app = Flask(__name__)
app.config['SECRET_KEY'] = 'olympvita-university-Wqn7RC8}vysS'


@app.route('/')
def main():
    return render_template('main.html')


@app.route('/privileges')
def privileges():
    return render_template('privileges.html')


if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1')
