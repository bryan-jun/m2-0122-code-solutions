select "c"."firstName" as "firstName", "c"."lastName" as "lastName", sum("p"."amount") as "amount"
from customers as "c"
join payments as "p" using ("customerId")
group by "firstName", "lastName"
order by "amount" desc;
