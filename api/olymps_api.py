import flask

from data import db_session
from data.olympiads import Olymp
from flask import jsonify

blueprint = flask.Blueprint(
    'olymps_api',
    __name__,
    template_folder='templates'
)


@blueprint.route('/api/olymps')
def get_olymps():
    db_sess = db_session.create_session()
    news = db_sess.query(Olymp).all()
    return jsonify(
        {
            'olymps':
                [item.to_dict(only=('name', 'number', 'profil',
                                    'level'))
                 for item in news]
        }
    )
