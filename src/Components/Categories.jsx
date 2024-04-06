import Card from "./Card";

const Categories = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold mt-10">
        <h1>Categories</h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            CardHeading="Getting Started"
            CardFont="Learn the basics, connect your calendar and discover features that will make scheduling easier."
            CardImage="https://static.vecteezy.com/system/resources/previews/000/378/951/original/home-vector-icon.jpg"
          />
          <Card
            CardHeading="Using Calendly"
            CardFont="Availability, Event type settings and Multi User Features."
            CardImage="https://th.bing.com/th/id/OIP.BD72p_w2lXqUKmR7JbZJoAHaHa?w=150&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Card
            CardHeading="Calendly For Mobile"
            CardFont="Mobile apps for iOS & Android."
            CardImage="https://th.bing.com/th/id/OIP.FDzO-5-X96gm8Shc1f3hQwHaH0?w=139&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Card
            CardHeading="Integrations and Automations"
            CardFont="Includes Calendar Connections Calendly Integrations workflows and embed options."
            CardImage="https://th.bing.com/th/id/OIP.wAkpZDbk7tIV1kW4RdPAlgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Card
            CardHeading="Account Settings"
            CardFont="Includes Billing, Security, SAML/SCIM setup, and account options."
            CardImage="https://th.bing.com/th/id/OIP.Wh2Oh2iysTxjs-t1hg3vtwHaJc?w=140&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Card
            CardHeading="Video Tutorials"
            CardFont="Watch These short videos to learn about getting started with Calendly."
            CardImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AKUDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAwQFCAEC/8QATBAAAAUBAgUOCwcCBQUAAAAAAAECAwQFBhESIVWU0gcTFRYXMUFUdJGStNHTIjI1NlFhZHJ1k7EUNDdWcaGyI4FCUlODwWKVs8Lw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EAC0RAAIBAgQFAwMFAQAAAAAAAAABAgMRBBMxURIUIVKBIzNBMmFxBSJCQ/CR/9oADAMBAAIRAxEAPwC2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABC7YW9g2XcahNRjm1J1snlNa5rbUdpV5JU6siM7zuxJIt7GZleWFDN2KrZGhfPf7ABc4CmN2KrZGhfPf7B+kasVSw0G5RYhtkojWSJLyVGnhJJmkyv/ALAC5QEVq9tqLT6RKqMYzlPttMrbiml1pRqdUlJEtRoMiJN96v0EC3YqtkaF89/sEuLWqIUlLQucBTG7FVsjQvnv9gbsVWyNC+e/2CCS5wFMbsVWyNC+e/2BuxVbI0L57/YALnAUxuxVbI0L57/YG7FVsjQvnv8AYALnAUxuxVbI0L57/YG7FVsjQvnv9gAucBTG7FVsjQvnv9gbsVWyNC+e/wBgAucBTG7FVsjQvnv9gbsVWyNC+e/2AC5wFMbsVWyNC+e/2DIzqxzicR9ookZTN9yyZkuJcu9KTWky/YAXGA0KRVYFbp8SpwFqVGkoNSSWRJcQpJmlTbiSM7lJMjI8Z/3I7zACjLdkTmqBUkLLCQqVSEGlWMjScWNeV3oHQlNUKG2b0piC03hYBGqO2ZqUeO5KUoMz5hz7cfiFUeWUfqsYYrXfdafyl/8AgkbcPLhpylbQxV1xVIxvqZ9kLHew5ivuh9TUrIIMlJVDSpJkaTTCWRkZbxkZNDq2d1OqPWaLS6m/UJ7Tstpxa0NJYNCTS8434OEV/AOruTUDKlT6MfRE8xPtRR0aa6OTI4des8olJVNQpKiMlEpiQZGR8BkaBr7IWO9izFfdCV7k1AypU+jH0Q3JqBlSp9GPoiXiKj1iiFRpLSTIpshY72LMV90GyFjvYsxX3Qle5NQMqVPox9ENyagZUqfRj6IZ8+1E5VPuZFNkLHexZivug2Qsd7FmK+6Er3JqBlSp9GPohuTUDKlT6MfRDPn2oZVPuZFNkLHexZivug2Qsd7FmK+6Er3JqBlSp9GPohuTUDKlT6MfRDPn2oZVPuZFNkLHexZivug2Qsd7FmK+6Er3JqBlSp9GPohuTUDKlT6MfRDPn2oZVPuZFNkLHexZivug2Qsd7FmK+6Er3JqBlSp9GPohuTUDKlT6MfRDPn2oZVPuZFNkLHexZivug2Qsd7FmK+6Er3JqBlSp9GPoj8OalNBQV5VOpHjIvFj6IKvN/wAUQ6dNK7kyMJn2PUokkcC9RkRYUM0lefpNTRF+417QRYbdPfW1HYQpLzGCpttCDIjvI7jSRDSthZ+HZyow4cV995D0BuWpUgkEolqddbNJYBEV3gkOjX/JLvvw/oLZjnGSkl0HAoyg4t2ZYWpGZnZiWRmZkmsyiK/gLWI53EA+akfmzN+NSurxgHnHolf24/EKo8so/VYwx2u+607lL/8ABIyW5/EKo8so/VYwxWu+607lL/8ABI10vZn4MlX3oeS07C+aVneTv9aeHLtTqgN2cqZ0xulKluNsMvPOuyDYQRupw0pbJKFXkRXXnfv4uDH1LC+aVneTv9aeHSqUKzUhbLlYjUhxwkGhhdSTEw8AjvMkG/juvMV68KsyOnG7q5Xm665+Xms/c7kN11z8vNZ+53Immxep3xOy3NTe0Z2rPWLfQTjFGoTrZmZEtiLEcQZlvlhIIy/cVtLcs3FaxIvQdUpNZqsCmO0b7OUxzWW3mZSnjQ4ZGZYSDbLwfSd+Lf4BYQ0ItFoEF0n4VKp0Z8kqSTsaKy24SVFcZEtKb8fDjG+OkU1qcpNN9Eas+pUulRzl1KWzFjkokEt5R+EsyvwEJSRqM+G4iMfmnVWkVdg5NMmsymUqwFqZNRKQr/K4hZEsj9F5EKv1W3HDn2eZNR62iBIcSi/wSWt80qURekySkv7CIw5NoLLS4tRgvKQTqGzwiIzYfQsiWbL7Z4jL1H+pHeV5cnVtKxphh5Tg5x+D0UAjdl7X0q0rJJbMo9SaRhSIS1XquLfcYUfjI9PCXCXCqSDsnfQytNOzA0avUmaPS6lVHmnHkQmNd1poyJTijUltKbzI7ivMrzuO4rz4BvD8rQ26hxtxCVtuJUhxDiSUhaFFcaVJViMj4QYX3Ks3XXPy81/3BzuQ3XXPy81n7ncif7WbJZBo+Yx9EYHaLYNhZtv02zbLhERm281AbWRGV5XpXcf7DlaS+TsnB6RIPuuufl9rP3O5E6odbatDR4tURHXH11x1pxlasMkuNHgngLuK9PoO4vRwDDsXqd8TstzU3tHXS1FZjR2ojbDcVCUkwiMlCWSbMjMtbJvwbv0F6d+LqzlWtwOysU9qo+XKX8GZ6zJGvX/JLvvw/oNjVR8uUv4Mz1mSNev+SnPfh/QdI/2EfFMsHUj82ZvxqV1eMAakfmzN+NSurxgGE9Ar+3H4hVHllH6rGGK133Wncpf/AIJGW3H4hVHllH6rGGK133Wncpf/AIJGul7M/Bkq+9DyWnYXzSs7yd/rTw4dr7BVG0NV2Ti1GO2S4zDCmZhPHrRspwS1o20q8E98yuLGZ79+LuWF80rO8nf608JIKqKcVcq5OMm0U7uT17KlL5pXdCbWLspKsuxUkyZrchya4wrAYJwmGiZJZEZa4RHhKwseLgLf4JYAlQSd0HUlJWYAAFzmVBqteU6D8Mc6y4NpERiXTobbiEqJcOMlRKK9Ki1pOJRDV1WvKlB+GOdZcHTg/coHJI3/AIkjzMTqfW/oX8l9kQWoUioUaQmdT3HkEwsnULaUon4yixkolJx3evn9dj2P1QI9W1im1lTceqKwW2HyIkMTVHiJJkXgpcP0bxnvXGeCfGqs+DEYNb6yIkqO7BuNS1EXiNlwn6eAhCINPn2iq6WKTE1pTziVnrWFrUVsjK951e8RFvnvY8RFeZEdqNSRx/V8HQpNODs38bff8Ho8ALEV15n6z3z9ZgPQPmD6R3GR4sR34xVdY1MavPqlTmsVWGbcyU9JT9rKRryddWazSs0JUR3X3Ed/BvFvFaYCHFS1LRm46FO7k9eypS+aV3QsSz9FcoFEh0xyT9ocacecW4kjS2SnVGs0NErHgl9bzxX3F3hie8UveL6BCCUuhFWblFplM6qPlyl/BmesyRr1/wAku+/D+g2NVHy5TPgzPWZI16/5Kc9+H9BeP9g+KZYOpH5szfjUrq8YA1I/Nmb8aldXjAMJ6BX9uPxCqPLKP1WMMVrvutO5S/8AwSMtuPxCqPLKP1WMMVrvutO5S/8AwSNdL2Z+DJV96HktOwvmlZ3k7/WnhJBG7C+aVneTv9aeEkCOiOc/qYAAFioAAAFQarXlOg/DHOsuDVmV2PToEJovDfOHGJLRHcpX9JPhLMsZJ/c/pI9UqzlYquxdRpsdyV9kZdjSWGCwniSazdQ4hBYzLGZHdjLFix4o/ZjU8qlSeRMr7ciHBQZHrDuEiZKu/wAJpV4SE+kzK/gIseEnHUp8cj2cHjnhYScdWv8Ahx6HZ60Fs5q3jUbUNtRIkTHEHrDJb+tMIK69XqI+G8zK+87so1EpNBhohU5nAR4JvOruU/IcIrtceWRFefoxERcBEN2NGiw2GIsVltiOwgkMtNJJKEJ38RFzn6f7jKNEIKJ5lWtKrJyk9QAAOhxAAAADE/4pe8X0GUYnvFL3i+gmOqKT+llM6qPlymfBmesyRr1/yS778P6CUW+sxNqz8Kqx5DCGo8ZqFJQ7hksi15a0uN4JGR+MZGV5b3rxRm0RYNMkJ/yuxU3/AKXkLKLSm2WU08tIn+pH5szfjUrq8YA1I/Nmb8aldXjAPPPSK/tx+IVR5ZR+qxhjtd91p3KX/wCCRktx+IVR5ZR+qxhitd91p3KX/wCCRrpezPwZKvvQ8lp2F80rO8nf608JII3YXzSs7yd/rTwkgR0Rzn9TAAAsVA+KUlKVrWpKUISpa1rMkoQhJXmpSlYiIuEfRDdUt15qyshLa1JJ+oQWXSSd2G3/AFHMFXqvSR/2FZOyuWiuJ2O8do7Jkdx1+i4vb4+kPm2SyeX6Ln8fSFM0Gxjlcp6Z6aiiORvus62qOpw/6eDjwiWW/f6B1dzR7LLWaL7wZXiYp2ZWVShB8MpdUWltksn+YKLn8fSDbJZPL9Fz+PpCrdzR7LLWaL7wfleps8hC17MNngpNV32ReO7/AHAWJiyudh+4tuLV6FOd1mFVabKewTVrUWWy65gljMyQlWFcXDiG6POyYT9CtNTIzck1ux5tNcS82k2zvcNty668/TceP6j0UeJSi9Z/UaIS4jrKKSTT6M+AADoUAxPeKXvF9BlGJ7xS94voJjqik/pZW+qBaaoUqRApUVqObMiI3OkrdQa1rPX3EJbSd+IiwbzMseP1Y43aI8Klvqu8Z2KrnvMZtVHy5TPgzPWZI16/5Jc9+H9BZSbU0yyilltFg6kfmzN+NSurxgDUj82ZvxqV1eMA889Ir+3P4hVHllH6rGGK133Wncpf/gkLaSIz1u6hJYfZdYOVSVJdacQtoyTGjkZktJmnFcZHj4PUMNqJLD8aClt1lZpkPGZNOoWZEaEleZJMaqT9Ga/BlqJ50H+S2bC+aVneTv8AWnhJBDbGVWlx7L0Fl2dT23UMPEtD0yO24kzkOqLCQtZGW/6BINmqNlKlZ/E0xMV0RwnL9zOkA5uzVGylSs/i6YbNUbKVKz+Jpi1ivEjpCE6p3msfxSD/AAeEk2ao2UqVn8XTGjVnrLVqBJps+fTVR3ySZm3UYiXG1oPCS42rDO5RH6j9BkZHcdZRurFoTUZJkAsfaKztMoqIs6eliQUuS4bZsyVmSF4GCd7aDTjuPhEg25WNysjNpndDj7QbD8Fp03csph/+wbQbEfmdOeUzSGKWE4ne5xqYehUk5Nvr/tjsbcrG5WRm0zuh+XbYWOU26kqsgzNCiIvs0zGZ/wC0OTtBsR+Z055TNINoNiPzOnPKZpCFhLO9ynKUN3/vBE6lMhz7VxJUR0nWFyqUlKyStJGaCaQrEsiPfI+AehFeMv3lfUVrSrIWEpk6NPVW2Ja4ziXmGn6hT0tE6g70rWSFXnceMiv4Md+8c32ao2U6Xn8TTGyEGtTXKUUlGPwdIBzdmqNlKlZ/E0w2ao2UqVn8XTHSxz4kdIYn/FL3v+BpbNUbKVKz+JpjGurUdZlfVKXi3iKfE7wWjqVk7qyRVWqj5cpnwZnrMka9fO+kun/1xPoMmqXIiya3TVxpEd9CaQyhSozzbyCV9okHgmpszK/GXONWtPxl0laEPsLVhxfBQ62pWK+/wUneKxa9Q7WdqZY+pH5szfjUrq8YBq6llSpMKzktuZUIMdxVXkuJRJkstLNBsR04RJWojuxHzAMRvKu2vSOMs9FfYG16Rxlnor7BIgHpcvDY83mJkd2vSOMs9FfYG16Rxlnor7BIgDl4bEcxMju16Rxlnor7A2vSOMs9FfYJEAcvDYcxMju16Rxlnor7BikUSSww8/rrbmtJwjSglYRpvxmV5cG+JOFxHeRkRkZGRke8ZHiMjEPDw+CViJ36kUplKXVDfS3IabW0SVGlwlGakniwiwS4OH9R0tqUzjkfou9g01wKvAkuOQDfwTwktuR1XK1tX+FVx3/qP3r9r/8AWqXTWOMYwStOLuaJOcneElY2dqUzjkfou9g+lZGYZkX2yNjO7xXOwauv2v8A9apdNY+KetcpKkqdqJpUlSVEa13GlRXGR4xb0u1lfW7kc5EVT0v7KytLl7qm0uERkhSUmd68eO67GOltekcZZ6K+wbdHpzsXXH5CSS6ssBCbyM0IvvMzuxXni/8AjxdcTToJq8kVq4hqVosju16Rxlnor7A2vSOMs9FfYJEA6cvDY5cxMju16Rxlnor7A2vSOMs9FfYJEAcvDYcxMju16Rxlnor7A2vSOMs9FfYJEAcvDYnmJkZOhvkZkchrEd3iqAd1fjr94wFMmGxbOnucbbDK4tG53dINsMri0bnd0h6O2FoGSqZmcbQDYWgZKpmZxtAZs6e5ryYbHnHbDK4tG53dINsMri0bnd0h6O2FoGSqZmcbQDYWgZKpmZxtAM6e4yYbHnHbDK4tG53dINsMri0bnd0h6O2FoGSqZmcbQDYWgZKpmZxtAM6e4yYbHnunVWdUZ0KC1DbW7LfbjtpZNWGa1ngkfhqwbi4b+D9B27Qwq5ZyNGkTafgFJeUy2pTra2yUlOGZKNlR4z4MZbx+gXcxTaVGcJ2NAhMukRpJxiOy2siPfLCQkj/cZno8aS2bUhlp5ozIzbeQhxBmWMr0rIyEqvO1irw8G72PM22GVxaNzu6QbYpXFo3O7pD0dsLQMlUzM42gGwtAyVTMzjaAjPqbk5NPY847YpXFo3O7pBtilcWjc7ukPR2wtAyVTMzjaAbC0DJVMzONoBn1Nxk09jzjthlcWjc7ukG2GVxaNzu6Q9HbC0DJVMzONoBsLQMlUzM42gGdPcnJhsecdsMri0bnd0g2wyuLRud3SHo7YWgZKpmZxtANhaBkqmZnG0Azp7jJhsecdsMri0bnd0g2wyuLRud3SHo7YWgZKpmZxtANhaBkqmZnG0Azp7jJhsecdsMri0bnd0g2wyuLRud3SHo7YWgZKpmZxtANhaBkqmZnG0Azp7jJhsebFVySozPWGCvMzxGv/lQD0qmkURF+BTKem/fwYkcr+ZICubPcnKhsboAA5nQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
