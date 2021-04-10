import sqlalchemy
from .db_session import SqlAlchemyBase
from sqlalchemy import orm


class Olymp(SqlAlchemyBase):
    __tablename__ = 'olymps'

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    name = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    subject_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("subjects.id"))
    subject = orm.relation('Subject')