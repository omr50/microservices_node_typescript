export const cars = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVR4nO2XTWsUQRCGS7dqsggqRkW96E3Um39A8ODFWxAFD2KuUfEv5CL6A/y4iHoRhEGnapewJzF48OOQRBEPQW+bRERFVDRM9xJbepiNijvZna8dIv1Anaan33qrunt6ABwOh8PhcDjWP0rosGb0FdN7LWSyhGL6qoQedrh2vBoTAZ1SQiqrgQRTl4ZqImx6BxTTj1j82nKzvjdpbDfJpOdmCrZpwYuKKYzma9DZ0hL/E2NggxKajhJkvAt96Geki2I6ExfmeyjeISgbxTQeCQp9Mj7sLMpINJbxVlyg16YJm6AsTADbldCHuHLjAyWXwoiZhroWfBmbuZ074eSk8E5s4rFdYkUbsYSBt18xfSttv2jBI4rppz2pwsA7OPh76Yz8tXw5534xk7Cx06gd04KTmvGeFprpnlLDDiX0RTE9UkI3dIATHakdNU3YMdDRqgVfVZF0ym/Ox9jgdRXQabu/fneiAbuU0Luqk8wUjG9Xl6Fiulp5Qvm69Hn5fn2f3dDtqpPJH3jTXgJXqk8kZzAurR6V6zmU0Mp/YUTbb1bVCTgjkroj2A7ZO2EENtsIxRvTjPPlVRcz6fUxgm3jw+g/1xkfRrXgQhkmTEY9+z+wlPTQVibpWqMa3smijYRZ9RgX7Zf9StIA29rES2YLthRtxGTUU0yXbdu8yEyPzqw5sQ9bh2rE76HHuGhNWA+92yj0NGq1eGNJE9tlEFVD6AnkpDQ9LXg+djyfuPkY30RjApzI4SG9HuO5gSe2rdKMc/FJsmA3ml2jNqLKdCcVmklsawoG1mOcTa1nHsAeLfhijZNi1kzB7rwmUujNZdYzLRjRDbygmJ7bf+k4ntmlUEQnUum1YKRoPYfD4XA4HA4ol19yNuQW5PzxLwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfElEQVR4nO2Xy4oTQRSGSxeOZOr/a5JWNBvdibrzBQQXbtzJoOBCnO2o+ApuRB/Ay0bUjSD4DKLMwssiM0pouyotg+AYERVRUdDFGKlYBpR0kr6lGakfziY5dc75qs6p7hbCy8vLy8vLy2vjK1bqgAHuGvKtIXtZTAOfNXCvAxypBMKQxw35IyvAUAMuTBdCyr0G+OZ29EpYr+8aAdwvMun/tlJ1DZzT5HfrFwGnxDTUE2KTAR64Hbw9zn8cyMAPOOlifo2l3C/KlgYWXHEfYim3FwXifG84/7DVbNZEWYqAQJPvXEstTFjcxCAvhdiqgWduzc3cBY8o6lYfglyyLVY0iFUE7DHAl9LmpSPlQU3+tDdVR8p9k65LC/JX+yLnvPSE2ByRhw15XgN3DND6c0tN2zTwyQD3NXDNkItaqUNGym2TXa1ku4qiUwGS7x3g1Yg8YedrANGend1hyDdVF5nJgBeDNjTA5coLygfz8fnc3G47ZK8qLyanafK60OR61YUUYN3BVbmRTZPr/wWIsc+sqgvwIEx5IvZW00rN6yCAtY6URw1pSut3ZMsnxgUNyca/bwL2Nw2slQERZsxnQbqJgZWaT3ytUepY4SAqWz5NvrYPxEuJDkGApMBxo8HCQYKM+YCLIhRii4Pppgm8Wq+raYKsDslnT8JCWIbhx0g+so520JIC2zZwAR+KnCotnyHPuEUmafgMGTufxRwMWfKdnjiwa7cVd5Os2UGzPWrN7czvoEAr8VhTKEW+5dT5olqtqYGnIwZsOazVduaFmDSfBlYy54uFmInIs5p8Yr+l+0Y+tq1QxEmkyRcLMVN0Pi8vLy8vLy8vUa5+AdygXEIflsMZAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR4nO1XS2sTURS+umglzrljGkW70U3xEbQ5J0NdKi7cuJOi4ELstir+BTeiP0DrRtSNIPgbRHHhY9FWCTHnZESEPkRUREVBFzVyM9MimkknM5OEyP3gbDJnzne+87iZq5SFhYWFhYWFxeDD9ccJhO5poXdaqJHEgPELMN6HOh7riwgt5ZNa6GdSAS1FCV7qqQhHvL0g+D2s6LV81dsZLThIMuq5WzmQB8YLmulHM14Nz6ieoKE2gNDDoIJ0Zz339YSsAoROhzG/OT4WM8s3kpBLU0Fy+NHxcVtWQgJfvBn6V0dnvZzqFqA2UdBM74ORKk3FSy6+EPXm8CZgehEW6lbafNsldbtJwvjIjFjmQprFGt8Ngl+7ti9OnQ5ppl/mpHLqtC/ue50K+XN8IfW+NNRGXcOjWvAiMN4FwdnVU6rXBoyfQegBMF3XgtMul4444m2NdbRqwUo/ku7IGD+EAmd0DU+Z/VoTsbmyf7sWfNv3JJP9mb5aG0MQvNrvhNKJoU9bXtIuBYwL/U4mtTHdUJpppe+JpDZcXjsqB9qYVv4PIUINK0QPWkeAccFlmizwHjDm1MvHtZB0KyFIyNdWSPNorhZH/v4SML8B02I3ROiEfOY+sBz10FQm6rPGFTyRtRA3KR/TkgKmK1EOprVRgUf8gzprIYWEfCB0WalqcSgQ829n2gXOv/bcXgrJt+JjWmqKqBaHWr6kBZ8YR7Noka1mmgwDPlYp0TU+LeVz4UsStXxayA98cDqFhiR8Z+NHDsZtPjhJaNEsmplRY2FlmkHN5SuyrZ0gPt9cx3y5mjcKTM+jFwznctWJHalFxOVjmk/O548N6xqd14zPzF3amBZ8akYhk050wuePDWfOZ2FhYWFhYWGhuorfUanUti6p9LQAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nO2XS2tTURDHry6sCCq+UDe6E+1OBCk1mdNHMucYi1Ckggux26r4FboR/QA+NqJuBMHPIIoLH4u2irgouhBSIzV35poGBV3UKye5RJQccp+5RM4fZpNM5j+/O3MON45jZWVlZWVlZTX4AvX1qEB+BJJXhWQ/ViCvAfJjUFzJB0LyWYH0MzZA97jaVwiB7mGB/D14ojdPlLwDxtygSdP3hVONHSDpCiD90HnFMl1w+iN/AyA/bTdID3pl9wL5k+ee13kg+VtB0XBq7ZoNabZtSFRQzT1pgQS5d1u1kd4dm6ptcbLS5OTaLoFUD6YxG7K58CDi42aQ9CaYzD0nKwHy/QDimV6xtEG0CifrhwRyM7PzUix7ICT90jcVlOhI2N9FBfl7fTnheZn3NwJSGZDmAekhSF7o3FJ9DpDUEJKfgKTbAr05QHdcTDV3h7xa6W0eTUcCRHI1oEC6JSSf0+erAzExsbpXIH/Ou8l4k+MPnTUEyTfybihRIHnjFe+gPmTV3JtJOhmkO45AWs+7kRSi1rkqBzqQ1v8PEMm+BRGDNxGqjiGdGT3tbtUBiqYBeTm7piiWXw8Qqo5gY+e/bwL6M0BeyQJiJKafBqmZvtRPxvhao3gmbZCxmH6A/MkBSddNCXq0psLHFW1LG2Q0ph8gX3OGZ/xNAUwtSuFSydveT5BSFz89CQ2hGbqPEelFK1HRtKmwXoNgr587CZWZX1G6lwLiZdPhE5LftwqjN5eAIbIfKO9i6MJ6VAJpKSi+og+a3lEdwZNpF5W8YBxrBIX1E8iLkf2Ksr4fJL027jTyoqh82ZcUIrwfLcX2U8ofEkiXQfIr/V+6Fcgv9SqkMYkofkr5Q2n7WVlZWVlZWVk52eo37KITegJVPCoAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO2XTWsTYRDHVw9WBBXfUC96E/XmFxA8ePFWJGKbmaQqCFXrV+hF9AP4chH1Igh+BrEItS95JlFKDyUexLTZmaSlqCjooUamuyki2XRfEyvPD+aSfTL/+e/M8+yu41gsFovFYrFsfUrYPEMoLwlZCKUVL/iLQX5l0L3QFxOU50sG5Wd8Ax0C+E5vTRTrJwnku4oblAeE9WOBa/0ig67PDX/aR8C3DcgPb61bdHpBy2ltI5QJzwQ/32z9ZkbalLCB/o35Vsm7p1MrOLAw4BFvDGSlcsU9lJYRL7c88XPP0/X6LicrZnHpgAFp+vM8Eqq4CEYmih93GuT3fmeeOllhUJ6ti4C80RFL24gyi80TBPw1s/1SLrhnDfIvPanK6J4K+7+oRv4cX5N0v7TGW9sNyHkCGSeUFwaE2qdU74M/E8hrQn5E0BilAp+jofrBcEcr8lx/io4Uy2rQgDw0eRnS/bVhYvqyHCZk9x8oMnIY5A8bY0go9/tdUDIzsloedo/rOV7rdzHJgx87Bnit/4Uk7QrXN47KrRwGeO2/MEL6zOp3AdYIRu0ISK0EjYuTV5d3a1BBBgllIbO7C/H0uhsBqU1dq+3/+01AfyOUxSxMTMXUc/ToCrqodybwtQY5l7aRUkw9A7ykD8R7QQu0tUGJZ/Ire9I2MhlTz6DcdeZz8zvUTKfOdEtMudW9vTRCHfS0E2pCPXT8kwGeWl9ckMGgxDoGXkJ+6yQkMz0Cvum7XgjafAa56m3QxmgCD9H10L0ROrE3blzxky/qRtMZ1dA7006qH1+BbY1AWD1CKUfWo3zzKAG/6zLT5dli40hSE6H1gCux9apj1QEDfItQZvRb2gue1lFIoxNR9Kpj1YG09SwWi8VisVicbPkNFl82IHHvqVsAAAAASUVORK5CYII="
]