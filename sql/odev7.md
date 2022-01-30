# SORU 1
```
SELECT rating FROM film GROUP BY rating;
```

# SORU 2
```
SELECT  replacement_cost,  COUNT(title) FROM film GROUP BY replacement_cost HAVING COUNT(title) > 50 ORDER BY COUNT(title) DESC ;
```