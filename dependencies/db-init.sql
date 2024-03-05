CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    name varchar,
    creator_id int
);

CREATE TABLE workout_completion_events (
    user_id int,
    workout_id int,
    completed_at timestamptz
);

INSERT INTO workouts (id, name, creator_id) VALUES
(1, 'bench press', 1),
(2, 'squat', 1),
(3, 'handstand', 1),
(4, 'pull up', 1),
(5, 'push up', 1);

INSERT INTO workout_completion_events (user_id, workout_id, completed_at) VALUES
(1, 1, '2023-03-01T12:34:56Z'),
(1, 1, '2023-03-02T12:34:56Z'),
(1, 1, '2023-03-03T12:34:56Z'),
(1, 1, '2023-03-04T12:34:56Z'),
(2, 1, '2023-03-02T12:34:56Z'),
(3, 1, '2023-03-05T12:34:56Z'),
(4, 1, '2023-03-09T12:34:56Z'),
(5, 1, '2023-03-12T12:34:56Z'),
(4, 1, '2023-03-12T12:34:56Z'),
(5, 1, '2023-03-13T12:34:56Z'),
(1, 2, '2023-03-06T12:34:56Z'),
(1, 2, '2023-03-07T12:34:56Z'),
(1, 3, '2023-03-11T12:34:56Z'),
(4, 4, '2023-03-01T12:34:56Z'),
(4, 4, '2023-03-04T12:34:56Z'),
(5, 4, '2023-03-01T12:34:56Z'),
(6, 4, '2023-03-01T12:34:56Z'),
(7, 4, '2023-03-02T12:34:56Z'),
(8, 4, '2023-03-03T12:34:56Z'),
(9, 3, '2023-03-04T12:34:56Z'),
(10, 3, '2023-03-05T12:34:56Z');
