select "c"."name" as "country", count("t"."name") as "cityCount"
from countries as "c"
join cities as "t" using("countryId")
group by "c"."name";
