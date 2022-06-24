exports.up = async (sql) => {
  await sql`
			CREATE TABLE users (
				id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
				first_name varchar(90) NOT NULL UNIQUE,
				last_name varchar(90) NOT NULL UNIQUE,
				email varchar(80) NOT NULL,
				password_hash varchar(80) NOT NULL
			)
		`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE users
	`;
};
