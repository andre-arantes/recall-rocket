CREATE TABLE `task` (
  `id` integer not null primary key autoincrement,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `name` varchar(255) not null,
  `date` DATE not null
)