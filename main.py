from flask import Flask, render_template, redirect
from data.create_perechen import get_subject_and_olymp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'olympvita-university-Wqn7RC8}vysS'


@app.route('/')
def main():
    return render_template('main.html')


@app.route('/privileges')
def privileges():
    data = get_subject_and_olymp()
    return render_template('privileges.html', data=data[0], all_olymps=data[1])


if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1')
