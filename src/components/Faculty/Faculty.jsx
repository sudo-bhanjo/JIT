import React from "react";
import Footer from "../Footer";
import { h1 } from "framer-motion/client";

<h1 className="text-orange">Faculties</h1>
const faculties = [
  {
    name: "Dr. Anjali Sharma",
    qualification: "Ph.D. in Computer Science",
    department: "Computer Science & Engineering",
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Prof. Rajesh Kumar",
    qualification: "M.Tech in Civil Engineering",
    department: "Civil Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDVMjjddNEWTZpJY-gg7oJOEd7fL4ONUUOQ&s",
  },
  {
    name: "Prof. Neha Verma",
    qualification: "M.Tech in Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUQExIVFRUVFxUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0fHSUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABAEAABAwIDBAgEBQIFAwUAAAABAAIDBBEFITEGEkFREyJhcYGRobEHMsHwFCNCUnLR4RUzYrLxgpKiFiQ0Q4P/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAJhEAAgICAQQCAwADAAAAAAAAAAECEQMhMQQSMkEiURNhcQUzQv/aAAwDAQACEQMRAD8A8xa1KY0rCpGrMaCIAhSNcngLjGpZBwK4hR5hPa5Qg0tSbilSWUJZHvJyR6gc/koWSSSAIaR11ziuZGSrRT1yREqWGmJR1Lh981bU9GAjSFykV9LQdisoaUBGMhRlHSb17m1kxIW2AtiRLqbdAPNETxAEAaWRtazqR939EVA2VzY7t7kbLHbo2dx9kynbmiJTd1+VvRWkU2R4iz809w9goYyQ7eRbwXG54pBCrBsrzCuVn+EJ1ySK6Ks82DE4JzU5Yjec0pyYWrrlUQeVGWpwclurJwR3ISumAUUj88lC4qIp7HySX1ULnpWMc45Kzo8M4lGkA5UBU9KXK4pqIDVFw04GgRsUCNIBybIYYEUYSLZap4arWrhHUHZdGkA2Dz0oaGEcRmnRx7rHHmVLUi7AeRXOzaAioGwemiBNnZBG1Vi1jRwTWxXzUzIldFNg7IlMyFFR03NT9VqJIGwaOl5qUta3sUrQ52gsOZThRjU5ntRUDYzDIRK/dsbW1XKywpln+BXKmi0zxABOBXApVzzoCgrioy1RvedFCD3uCjsSlaxPAJyAurBbS5IXHgFPTUJdqj6TDjq5WcEHII0hbnYNS0IHBWENNdExUh3S7krelhFhlwTVEW2Vgo7NDu1WNXStaze4/wB03c/JH8vqpK83IA5IqSQNla1isq7MttwCiZEiYoVaKbI42G27wREcKnjhUocNBmiSBbI2U/NSXaP7KRsDjrkOSIjgA0CJIFsEDHH/AEj1REVMB296lbDzzspg1EkC2NDUjmp7nAZnLvTIJQ7MEEcwrKJqAdcdxXKSkHXHiuVMtHhFkhNkfU4XNHqwntCDLOYI7wVzLR1KfsjNyowQp3NB0KgpHbr7nOyJKwJy7eA+kw9z8zkFcwUbWjIISDFWnK1kdFWxniiMkpN8kzY8lYYfTjet2KCIBzbhH4dZtydbJkAvRJGwCI/yP+5SQTANUNyRu8L39bpY4Lpl/RQwONt3gpooSVOyADVStcTk0eKtIFsayADVTNP7RdSNpLi7jdTU0YAsjoGxjKcnU+CJjiA0Cexqc5wGZNkQLZwangKCknMziyBvSEa2IDR3lV+MUWItz6Eho1DLOJHglyzY4um0X2ye0izfO0G18+QTK/pWs3sm96AxLEYmRtEbC2TLNzSCOd7oaRvTN3pJL8bcPJI6n/I4Onj3O3/BVTf6KXFRI513zFzf2tyHotVs3umEbosAsHiuIbjixui2Wwku9T37SjwZvyvuXDGdlKzRQDrDx9kqdGMwuWoEo9xrtQCo34VC7VgUkSnjXnz0a4Kms2ap90ncF7Kk2f2YhfvOcM7kDwK20guCOxZSnLmvLQSOsb+arJDJPE4xlT+zH1Xa2kkDYjsmwDqKpfs04C+q2pcSEPM1DiWTHGnKzJ2UVeFUZbHYhWDIERAzq3IUgaToLBdbErimLbIOiA1Tm3PyjxRAph3qdjLJyQDYPHS8TmimMSkgZkoKXGImuDA65Jtki0gSzDckkLclOwZeCSBuSIopcexJ8O41guXmwJ4IT/D5H5zSE3/SMgptrxboncnIX/GwBmNFj6iUrpPQaijS4G1lLGXRPDb5nRSR7bTA9aNjxzBLT9V5/WbQb5s0Kor8ReMwSFhh0/a2227GRcvR7F/6zpn5TQubfm0PHohK+PC5mndc1hP7SYz5LzGmxHej3i/NCHG3aWBSJY45G0vQf5Je1ZY7S4LHF1o5t+50JBWr+HH/AMcjk4rAf4i06tzW9+Gz7wvyt1iul0akpU3ehWRtrijXAZrktly6YgzTHIkPTI2BSNsvPWekqgikdme5Z5zPzT/I+5WgYLXtyVNDIDJ4n3KdDxMHU+aCmMTZIlYNDeSR7GqpRtGexlJF+Wk3UZFGNzJUW00j2MG4bXNl0MeoITLkJnqmM1Kq6jGnHKNhPaU7DKIZud1j2qd7M9EqXUP0FGCfJSytlkPXebcgj8MpGtIO7x14qeSMJsElnAdqQ3KTVsbpLRqGDJJAMk6M5JINF1EZCk2qh3uibzeAsltJRvhO5Y58e9bTaH5oDw6Vt/Na7EcDjnisWjTVY8yfcNjweLYfSgNzGaExaIWWqqMHLHObnYE2KyOKyO3izksrmrCvZVwxG3YlY0aIqOldu53ULGG/ipCfdYcXYe2BoAJW/wDh81ojfu/u+iwFW3qi5W4+G1tx4HMey04NTQvJwbIpVzkq6JnM3GVKQhYpApemC88ekC4dD3KipxaTx/qriJ1we5VTGdZOi/ic/qV80WjZUj5EICUhcopCO0vaTONUe1Q6jf5BXeHf5I++Kp9p29Vv8gty/wBYl8gLqjcGvBUVftI7MNA79fZRYxWXu2//ABxVM0hw4ZkgeGqXjxrljEqQpxqd7rAn77tFNJtP0RDSd8jjwy145qbZ7B3zziJgNzk537RxJXs9DslStiEToWEWsbtBv42RyrhIbDHatmO2Wx78Sy9xl6Zaei0NOclk9p9jXUDjVUbnCO93x3uGjmOxWOz2LCZou4hwObfvVOhO9CMuJx2EbSZCI8pG+63WHTBzByssFtb/AJTP5t9wtLhVTuRgE8FnzOpFQ4DZcIjla8HK99F5HtLg7qaV2+0kE9Vx4j+q9ewKrvvDt1S7UYLHVQujdrbIjUHgVmeOMlYcts8IdXtItoq5zhfmpsXwx9PI6N7TcE2J4jmEGx1tckOPDGHiGkkXEguwZLV/DVx/MB7FjYqprm5nRbD4cOaXSbvYtmFrvQrItG7cuXOXLcZjIxsU7GBDRyolq4DPRL9E8DtVWt+ZWFONUCz5imLxMPUeY4lNc5OUbxkohTNFhX+QPvis9tpV7jGjib2HdxWgwp1qYE6LzPaLEummc79I6jB2c10I+CQlL5WUWLTndyObiB5/ZU9EzdYXWNgN1o59veTZCVbd57By3nnwyaPZWD5I2BjZNA4Xzt+knUZ2uQqbpDYq2ey/D3Zz8NAHvsZZBd9v08d0dy14XkGx+IdEQWXAJF277s7m36uPYQOxekYzVbsAkuRvDUG1uOqX3pJujR2NtINrRG4GNxabggtuL+S8anhNHXOh/TfeYebDnu+Vx4BHUmJ0oeZJIIpGb2busS251Nxbnx80D8VJmsqqYtyDo7jPg12Q9bKoz+X0ScKg09mi2ofenaR+5pHmFHV4m5jL8AEHVTb1I2/Nh8z/AFug8Vk3m7vYp1CuSMKVIv8AY7aASEsJzuvQKGe+RXguFAxP3wTe69U2dxJsjQd7rBJVxYVhe2OyjKtmWThmCBxXh2KYZJDI6KRpBaePEcCF9IUlRfKyze2uyLatpeDuvaOqR7FE/tBWzw1tKbLY/DNu7LIL3yBWcqqZ0TjG8G4NiFovh24dO8AW6v1RYJXkRWR/A9FclTXJV0zIYqO6ma8pGuCVmq4DPRKwmm4oVvzH74IuHig2/MfvgmR8TF1PmOUcpyTwmy6KCQvFazo8Oy1dZvgdfQFeWyyce0n7++K2u1lVamij/kfHL6FYOR2V+wnzOS3LgBImpHXf3AX8Mx6+y1eymywrCXuzDSBYgEHjxHKxWLoJMjzd9Tf6r2P4b1rGU3C9yTz7PSyCcqNGGN2X9Hs3FEAbC7Rui9she5A5C+dlbOpmyQ9G/Q5HuOSr53zP/MbYkfKwmwzHEjimYRiFSR0T42Bw4hx3NeBIup3KthqL7tPgip9iYGbwHyv+cZWdne3oFk/i3gG8aOVtgITIHE5gMAa5oPi23it+ap0L91xux2h/aTw7uSznxRrd2gkcLdcsiH/6OAdbt3d5C5fXIXZ98GSY+9Ef9L93wBu30cEBM+912Dy71DJzDmX77AX9FFKe37siyejBJbB4NSjsOxF0L94O71XwalOkaTwSmSj1vAMWjlAs658VqICCvCdlsRkhlGeRK9fwyrJAdveyqLpllTt1sp+Ib0kYAkb6jksNsTEWVLmnIhpBHKxXs0UoIzOqxWLYZHFWtlYLOe12922tmjhFLJFoqatMNcuSOK5dMymOY1S2QrL3UjXlcGj0X6C6Z2qFY7M/fBE0p1UDGWJ++CbHxMHUeYgemyOyUpAUE8gAUSFMzG1tQd1re0MHufcLL10lgR3Dy+wr7HLue08A558jb6KgmhLvMrXHglA0ctgT2W817FsFA0x62342OBHA7oB9QV4nI7Xvt7/2XoHw42laGtie6xblnxCXlXsfhklo2cVHVMkcyoqZCy/5fRNa0Ft/1gmxNlcw0UG5lNUaC46MCx46tt6qypWMmYL2I80RDgMIz3G+St7XBpx5UuW1/KKfB6KZxkMku/T71og5vXtui+8e++Q5BYr4v4rGTBRNvvsd07v2hpY5rRfmbny7V6PtFi8NJCZJHBrWi9uJ5NaOJOgHavnevxB9TPLVSZOe69uDRkAwdwACGEflYvNktGk2fk/ImZ/E+OSPdD9+Cz2zNUCHtJzLb95uPotKGngBojyGGXIJT02ZzUxYDknQNdc6KbcPYlMgHHEAcgtXs7jHRkNcMlnhERnvJXG/6lGWesUtU53WaBbvVXj0pM8WQ/V7Kg2bxwgdG56ssSeDPEd6+qvH5r+gyWmGuK5I5cuoZDJtopOSUUkn7VuRTs7FFUiNguSFxvxnZ/MzKUtO4XJCiYzrH74LQT3c0uFrICmjG998kaVIy5pXKyu6IngoaqIhpNuF/JaARDNVO0NQIoSbXLurra1+KiQtPZgcSIsOwH/ycSgWQdTtNz9An1swd1R4n6BNqq1oFr/2WhOhtFAIxvvDtMjfllqo6eIskLTrkWkaHjdpRNO28hJ4xvLuy9iB7IaPe3wATYG3cQB/dRkR6NsxjdVGwbjt4ftd9CtfXbWSQRdJKWNsPlFySeAAyWEwCUCPedkLX8Qqutc6d7pHOJt8oOgHBZHbZsg0kDbRYzNVS9LPIXEnqR/ojHCzefbqVXVbQxgbxJueziAfFJCNx1/mdzP0HDv9kHVSGV2uQ4nS3Fx+i2RMk39kmE1RY7e8D/VegYXXse3XPiF57hpFy06EZeGhRMcrm5EGx5Zn0UlGxdaPRqaxJIN+5EdEFlsCxMNABOQ4WzPeStJDVb2eg7wfZIlFpltDiwck2w4BcHg8UwDPVSih0QIN7WVphta58zAeF1VGQHK6kwM/+4bnzRwXyQMuDduSJHJV0TIZaCvnkJDX2t2IeeOZzHF8hO7w4LSUtAxrnBotqkiw9hY8HJcqvo6f9K/DJZHRZuytokpr72v3ZH0tM1kRA0QUDet98kTVIzzdsKc82Nisvt1C78KXk5NIJ892/qtHK/dDjyF15jtZtM+YmBhAiNxe3WfbO9zoMtArhByegboo5p3botkNO0Za25dqihaNXH/pPuUhad3dOutzfIHxQr82kt0Fs+efBMocmGSTBoc4G7ncfvv9VPgtMZZxGLdYDeuL5WuSO1AMP5bS7IAm/M53Fu9WexVbu10Ujrbpe1rgdA153PIbwPgqabTLUlaN3U7O9FTNsXWL2scHAXF88iNRlZB1OGDe6rTYMc4gZFwaL2HavTcaw0GncA3rXYQOF2vB/t4rzXaTGNx5jjaRI3I8S1zst2wJuTf1SPxtNGlZF2tmGmqekO6xvW0y4dhPiq6ajcwZnMnQK/hpyy7iOsbkk5OPMkKtqKw72gFsgdfG3PtWqK9GWW9sFiiLTne/FFU7tbOHnn6pARYnUnMkqKkbqtEICZSCY3nibkfVEU9bIwjdeR2ajyKr4T1j2qbf63d9U1RVbFuTZt8ExLpQQQN9ueWQI5hHNe6+ixWF1fRyMffK9j/E5FbMyNvqsWeCjLXAyLsfva5KXBpD07MhqhgwX+ZOwlzenZ1uKVDyQT4Zv3FKmOK5dEyixVbLu0vnyUH4u8b1nMOq4g9+87W6n34ujeQ5cpzVG+/ZdUZP4c6cUBTfMPvgkwyraYS0FDxygOuT92VppoTN7ANu68xUxANjKdwdjdXegt4ryx4zvb7+q1fxIrt98UY/S1zvFxsP9p81hy86G/nbwW3HGsevYtP5bJa+YEWBNzr3dy6CMlm7oMrodgue9HUueTsm6E+2aW1Q5OwKVjWi29c8rf1UtK6w7db91rBERUzS4tOo6QX52ILT5XXOAs021zy5ZZ+d0UFbKlo+ocBnbWUUMx/+2Jpd2PtZ/wD5A+S80x3Zaphe98VM6Z0sona9ovY7oDo5AcxYjeBHMq9+BuK79LLTXzhfvNH+iW5/3tf5helkiyko7IpaPkvEo54ZXRz/AOZ8zh36X9cuxVrhdyvtrcRE9XUVAzDpHbn8W9VnmAD4qpgi4p0MdASnY8sySxMsCpLLinVQAEDZ6aDcnXMqSdvWBUFORlz7UJQdGAMltsOn3o2OtfqjzGR9QsOHZLVYCbwjO1iR63+qR1CuNjIclq+c/tQ+FvP4mPq/qT3Zn5l2GwkTsN/1LJFfJBPg9GcVya4rl0TKecwx9Y37VcYNgMkguSWM5nU9y01FsU6EmWRu+RwFrDwuqnHa+p3HBsZjYMr5XPkuQsTW5GtuwuWWCGN0TMyBnx8ysnR4jvEk8ERgZL94HK/HzWlwnZGhLbumJcdRvgegTY7X0Bk+LPJ9rpt6e44MaPUn6rOSOBz4eoWt+IVHHBWvjhJc1rWX45lt7X7iFk5iNbeI+q3wVQQpOxKU9a+ozRLyc7Zg8L6dyCpjYkKwhdkp2KSD7mgI74OYN0S64APLh2IohMeMkUcaiU5tm5+DuK9DiEbSerO10R5XPWYf+5oHivYviHippsPqJmmztzo2fzlIjafDe3vBfMmGVbopGuabOa5r4zyc0hwHmF7F8ZtoGy0NEGHKpIqLf6Gxgi/jK3yVSjckwovR41Kcw3lmfopmKB4s7vUxOSYgB9wucow5cXqNloR9jkq6H6lGSuyKCg4IHyWw08FotnZsnNtfQ+eR9lmyc7K6wWbdcRzA9P8AlDlVwZFyaIObf5U6gkb0zMj8wQTJnE6hOoZndMzT5gsS5Qx8Hp5KVMJyXLoGUpqr4ozOuAwDwCkosWlq6WTq9Y3AsqbZ7YGaWz5Oq08OJXomCYC2nswaLnRTfJssx1Hs7NHE6Rw4KHCqUsN3mwd/ReqYw1op36fKfZedYjZ7GW4D6Imq0IzSbZ5rt8GitlDDfKO9+fRtWWcAdP8AhXu1uVS89jb/APaFRys4jX3W2PigI8ArRZ3mjYigJD1ge3NFB1lIhMLbJbJSHNC3uE6KRHZBs7EbiGNvnbSxP0p4nRjtvK9/sWDwULhdCObZw7/f7CplhLs3BPcUwDO6VysiEXP0ScEgUZaIZ3dQ9ygpNVJWZNKjpNEv2WwpvzK+2ZaDUxtdmDvAj/odb1sqCDW6PoZSyRrwbEG4PJMfAHKPS34REf02UEWz8Qe1wJFiDqqKPaKYcQUTR7TvL2tcwZkC6yJwA7MqPQTokTb5BctRR6RHG0CwVNtK6zLg2PMIGgxvpWggqPEHF4sVjfBqKOqxGUxuaXFwtrdUeGyb2V/uyuauhc0O5KrwvDwCTvaqnoTkZ5tte4GslHAFo8mNVE9v9lc7WttWz8fzD7Cyo5Lju9ltXCBjwDThOjdcJJlFTuQXsNrQdEU14smwuzUrwjKHQy8ElQMvL0IUByUjn3HgVLLJWuyT7qNifdWWI5yS6QhdZCWDVzslGw2ATq0ZKBqC9kfBY0xyU7XKCIZKdgzTkCWbIxe6lpbdKzP9Tfdc1hvqpKdp6VuXEe651bHf09WByHcFya09UdwXLcZTQUGxLoyCJ+8AWBVhW0BYBc37Vax4hln6Kb8VGRm5o7yAsujSZTFGtEZ3jkhMFw+kkdu34aXt3rVVr6Rws8sd6+ywm0FDHHeWAltswqkLlC9nlPxCp42YjVRsN2te0A9ojZvDwdceCzRPBEYrO6SaR51c95JPElxKDc1o7T2LWtIFIgmah4tURI88vNQxaoHyH6CAieCGYPv1U7DkmIAZIFbV+DNZAJmSEkFrXscB+q/WjI4XyseYNznatTZJnEbpcS0aNvkhlF2mgk17HR8FIooHXAUwReiCG663FOTXZqFglWMlDEiqtuSEpjZA/Ip8BrJeQU0bjdRNcFK1NBL1juYRFNSneaQTqPdDNdbQ6IiLEnAgEcR7rAxuz0xh6o7guUEb+q09g9kq1iDUteRaxQtbIb6rlywSNcQUuKZiw/Jd3JFypFyPBsdymkAyG+73UDBkkXLoRMvoEq3KOn1SLkH/AEG+AhymhK5cm+wEOKiKRcoyD6fRELlyi4COK665coWQz6IQxizDzaSe8PcPYBcuQy5RXolhb3+ZStkIfa+S5co/RSNA3MNPEgKQHrDvHuuXLK+Q2elxHqN7h7Lly5aRJ//Z",
  },
  {
    name: "Prof. Arvind Patel",
    qualification: "M.Tech in Electrical Engineering",
    department: "Electrical Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCCh3NHn5H4K3iZVJRgl_npapa-pqWavHhg&s",
  },
  {
    name: "Dr. Meera Singh",
    qualification: "Ph.D. in English",
    department: "Humanities",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgmh5b1wHw5_LQQTEUw6rvhiaur3TD0Db5Q&s",
  },
  {
    name: "Prof. Sandeep Yadav",
    qualification: "M.Tech in CSE",
    department: "Computer Science & Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVz91mJ8tCQUenuvU_i8jdcCKIHId8jWOYA&s",
  },
  {
    name: "Prof. Priya Nair",
    qualification: "M.Tech in Civil Engineering",
    department: "Civil Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEID2KxhCpcvcS-HDIYhjw-XAfb1RuHPtIEg&s",
  },
  {
    name: "Prof. Deepak Chauhan",
    qualification: "M.Tech in Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmmEAATcSNyC1vRC07KWaoDsPo2suOZex6A&s",
  },
  {
    name: "Prof. Kavita Joshi",
    qualification: "M.Tech in Electrical Engineering",
    department: "Electrical Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQLYUh82TqA-dmKa3dqvF8V_5OBJqTxx0GA&s",
  },
  {
    name: "Dr. Rakesh Mishra",
    qualification: "Ph.D. in Mathematics",
    department: "Humanities",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGZghWak4A2x_phknMD0t-bdawtw8rSZlfw&s",
  },
];

const FacultyPage = () => {
  return (

    
    <section className="px-5 py-3 bg-gradient-to-br from-[#fceae1] to-white text-gray-800 ">

      {/* 🔹 Heading Section */}
    <div className="py-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#E87722] mt-20">Our Faculties</h1>
      <p className="text-gray-600 mt-2 text-lg">
        Meet our highly qualified and experienced faculty members
      </p>
    </div>

      <div className="max-w-7xl mx-auto mb-8">
        {/* Header */}
        {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#E87722] mb-12">
          Faculties
        </h2> */}

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-2xl transition"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-40 h-44 object-cover rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                {faculty.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {faculty.qualification}
              </p>
              <p className="text-sm font-medium text-[#E87722] mt-1">
                {faculty.department}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
  
};

export default FacultyPage;
