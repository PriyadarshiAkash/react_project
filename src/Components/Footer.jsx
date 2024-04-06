import React, { useState } from "react";
import About from "./About";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="">
      <div className="mt-[126px] gap-[110px] flex max-w-[70%] mx-auto">
        <div className="grid space-y-7">
          <div className="w-3">
            <h1 className="text-2xl font-extrabold">
              Easy <span className="text-blue-700 font-extrabold">ahead</span>
            </h1>
          </div>
          <p className="text-sm text-blue-900">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <div>
            <select
              className="w-[295px] h-8 border-2 rounded-lg font-semibold text-sm"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English (US)</option>
              <option value="Hindi">Hindi (IND)</option>
              <option value="German">German</option>
              <option value="French">French</option>
              {/* Add more options as needed */}
            </select>
            {/* {selectedLanguage && <p>You selected: {selectedLanguage}</p>} */}
          </div>
          <div className="flex">
            <div className="flex h-8 w-[135px]">
              <img
                className="pt-1"
                src="https://th.bing.com/th/id/OIP.ZgivgsBKdCd-Qb_hazm-8wHaCM?w=345&h=103&c=7&r=0&o=5&pid=1.7"
                alt=""
              />
            </div>
            <div>
              <img
                className=" w-[105px] h-9 "
                src="https://th.bing.com/th/id/OIP.tX5I3xynx2Pap_qcEx49KgHaC9?w=336&h=140&c=7&r=0&o=5&pid=1.7"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <img
                className="h-6 w-7"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADBAOEDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAEHBggDBAUC/8QAQxAAAQQBAgQEAwUFBQUJAAAAAQACAwQRBQYSITFRB0FxkRMiYRQyQlKBFSNyoaIXJDOSslVigqPTJTRDU2Nzg7HB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALXJOTzKjJ7n3Q9T6ogZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6IgZPc+6ZPc+6+ZJIomSSyvZHFG0ukkkc1jGNHUuc44AWF6t4mbP01z4q8s+pTtyMUGj4AcPIzykNI+rQ5Bm2T3PumT3PuqcteMGpucfsWi0om+X2qeewfX938MLqjxd3VkcWnaIR5hsNwH3+0FBduT3PumT3PuqlpeMHNrdR0QYyOKSjZII9Ipmkf1hZvo29Np666OKnfbHaeQG1brfgTkno1nESxx+jXFBkeT3PumT3PuiIGT3PumT3PuiIGT3PumT3PuuG1ap0a81u5Yir1oRxSzTvDI2jp1PmegC5QQQ0jOCARkEHnz5g80H1k9yiIgg9T6p+o/XyQ9T6rGN96o7Sdr6xNG7hntMbp1c+fFZPA8g9w3jI9EHDt3fGk7g1PVdMj4YpYJ5v2cS7leqx8jIzP4uRcR2OfwnGWrVGvYsVZoLFeV8U8EjJYZIyWvjew5Dmkc8hX1snetbccDalt0cWtQMzLGMNZbY0c5oR0z+Zvl1HL7oZoiIgIiICIiAiIgIiIC8Hcu6NI2xUE9xxksSh32SnEQJrDh55P3WD8Tj+gJ5Hsbh12lt3SrWp2vm4MRVoQeF1my8Esiaf0JcfIAnnjB1w1bVtS1q9Z1DUJjLYndk9QyNg+7HG3yaPIf/AKckPR3DuzX9yTF16wW1WuzBSgJZWix0PDn5nfV2Tz8hyHgIiAiIgIiIM92r4jato7oKequlv6WMMBeeK5Vb0zFI482j8pPoR53dRu0dSq17tCdlirYbxxSxZLXDoQQeYI6EEAg8vJaqLtQ6jqtevLUr3rkNWV5klghnljhe8gN4nRtcGk4AHTyQbK6nuHbmjhx1LVKddzesRkElj9IIuKT+lYBrPi3UjD4tCoOmfzAtaj8kQPdkEZ4iPV7fRU/krsUqV3UbValSgfPasyCKCKPHE5x+p5ADqSTgAZPIIM42wdwb53NTn1i1PapaY9uoWGu+WtGGEfDijiYBGOMgA8skAnnhXmvA2ptuttnSoqTC2S1KRPfnbn99YLQMNJ58DejenmcZcV76CUUIgHqfVVh4wWHN07btXPyT3Ldkj6wRMjH+sqzz1Pqqp8Ymkw7Ufzw1+qsPPllwrOHL9CgqJckE9irNDYryyRTwvbLFLE4tfG9pyHNcOYIXGiC8dmeIdbWRBpusvir6ryjinPDHXvO6Ds1sh7dCemM8IsJamKxtp+Jd7TBDQ1z4tyg0BkVlvzXKzfIOJPztH1OR3OOFBdqLq0NQ07U6sdzT7UNmrJybLC7IzgEtcDzDh5ggFdpAREQEREBEXR1e+NL0rV9R5ZpUbNlgd0dIxhLG/qcBBSXiVr7tW12WjC/NHRi+pGAflfZz+/kP6jhH8P1WDr6e573Pe9xc97i57nHJc4nJJJXygIiICIiAiIgIiIOzSpvvWIq7ZqsHGfmmuzsggib5ue958uwBJ8gTyVo7f1Twx2XXfIzUX6pq8rOGzYp1ZXEN6/BrOlDYwzv8+T1PLDW1KnVBa+p+L0rg5mj6Sxn5Z9Sk+IcH/wBCHAB/+QrJNl1dy6m2Pcm5Lc8skzeLR6ZAigrQvaWmz8GMBnE4HDDjOCTk8fy4ZsHYjtTfBrWsw401hElOrKP++uB5Pkaf/CH9Xp9660DJ+vuilEEHqfVYD4q0XWttR2mNy7Tr8Ezz2hma6u7+ZYs+PU+q6mo0K+qUNQ06x/g3a0tZ5xks424DxnzacEeiDVdF2b9K1pt27Qts4LFSeSCZvlxMOMg9j1B7FdZAREQejpOt6zodn7VplyWvIcCQNIdFK0fhljdljh6hWxoHirpNsRwa9CaNjkPtNdr5Kbz3cwZkb/UPqFSyINra9qpchZZqWIbFd/Nk1eRksTvR7CQuZatabq+s6RN8fTL1mrISOL4Eha1+OYEjPukfQgrPtK8W9XgDI9YoV7jRgGeqfs0/1c5uDET6NagudFh+neI2yL4YHXpKUriB8PUYnRgessfFF7uCyird0+8z4lK3VtM/NUnimb7xuKDsLEvEWUxbO17GQZDRhBHZ1uIn+QKy3mOoP65WJeIsRl2dr3DzMZozADsy1Fk+xKDXlERAREQEREBERAREQFa2zfDZ7zX1TckRawcMtfTHjDn+bXXOw8+DqfPABa6qVtk37rP4W/8A0EABrQGtAAaA0AAAAAYAAClEQSiIgg9T6oh6lV/v7dOu7XvbemoOhfWtQ3RYrWYw6KV0T48Oy3DwQHciHe6DpeJu0n3ojuHT4i61ViDdTiYMumrRj5Z2gc8sHJ3+7j8nOmVeGl+K22rQY3UoLenTfie1v2qsPqHRgSf8v9Vhu7NF2hcM+r7W1jSyH8U1nTH2GVnh2cufUZY4Tz6lmPTrwtDAUREBERAREQF9Me+NwexzmubzDmEtcPQjmvlEHsV90btqACDXNVY0dGfa53MHox7i3+S7lnfG9blO1Qtaq+apaidBPHLXqOLmO5Ecfw+IH6grG0QEREBERAREQEREBERB9wsMssUY6ySMYPVzgFtgRjI7cvbktYNvVza17b1fGRNqtBjv4TOziPtlbPnmSe5JQEREEoiIIPU+qrjxboun0XS77QSaF90T8fhitR4Lj+rGj9VY56n1Xna3pcWtaTqmlyEAXa742OdnEcww+J5x+Vwaf0QauouWxBPVnsVrEbo568skE0buTmSRuLHNPoQuJAREQEREBERAREQEREBERAREQEREBERAREQZh4b0zb3bpTsZZTjtXZPSOJzGH/M5q2DVR+EGnkv1/VXN5NZBp0Du5efjyj+UfurcQEREEoiIIPU+qIep9UQVL4n7TeXO3LQjyOFjNWijHNuBwttAdujX/ofMkVMtsXNY9r2Pa1zHtLXNcAWuaRghwPLB81TW9PDmzTfPqm34XTUiXSWKMeXTVfMuhb1dH9Oo+o5tCs0REBERAREQEREBERAREQEREBERAREQERextnSHa7rmlabg/CmnD7RGflrRD4kpyOnIED6kd0F57C0s6VtfSI3t4ZrjHajY5YPFZw5mR3DAwH0WUKAGgANADQAGgcgAOQAUoCIiCUREEHqfVEPU+qIC6tjUdKpyRRW79KtNK0vhZZsRQvka04JYJHDOPou0sH8StCdq+gm3AziuaO59tgAy51ZwAnaPQBr/APg+qD73BtPYmvmSy+zUp3n5e63Ss1mmQ9eKaMu4HfU8j9VVOubSi0hs0kO4tv3o2ZIjguMFxwHeuC7+TysXRAREQEREBERAREQEREBERAREQEREBXL4T6Ea9K7r07MS3uKnSJHMVon5keP4nAD/AIPqqu0DRrWvatQ0yvkGxJ++kAyIYGfNJK7y5DOO5wPNbMVKtalVq06sYjr1YY68DB+GONoaAT37oOdERAREQSiIgg9T6oh6n1RAUEAgggEHkQeYI7FSiCgd+7Qk29fdcqRH9jXpXGuWgkVZjlxrPPuWdx3LSsKW1d2lS1GrZpXYI56tlnw5opRlrhnI6cwQcEEHIIyOio3dvh9qmhOmuae2W7pGXP42jisVG9cWGNHMD8wGOXPh8wwZERAREQEREBERAREQEREBERARFYnhxtA6rZZreoRf9m0pf7rHIPluWmHPQ9Y2H73kTy54IAZr4c7XOiaYdQuR8Op6pGx7mvbh9apyfHCc8wXfef08hjLOedIiAiIgIiIJREQQep9UQ9T6ogIiICIiDENc8PNp606ScQOoXHkudPp/Cxr3HzkgI+Ge5IDSe6wK94Sbihc40L+n24x0EpkqzH6cLg5n/MV0TTV60MtixNFDBEOKWad7Y4o25xl73kNHuq03L4p064lqbcYLM/NpvzsIrxnGMwROw5xHkSAOXRwKCtNa2zr23/g/tWCCAzn9y1tqrLJI0Zy8RxSF/D5ZLQF4y7Fy7e1CzNbvWJbFmZ3FJLM4ve49AMnyHQDyXXQEREBERAREQEREBEWWbQ2XqO55xK/jraRC8Czb4fmkI6w1g7kXnzPRvU5OGvCNmbQtbnu8UgfFpNV7ft1gci4/eFeEnkXnz/KOZ6gP2CrVq1OvXq1omRV68bYoYoxhrGNGA0LjoUKOmVK1CjAyCrXZwRRs6AdSXE8y4nm4nmScrtICIiAiIgIiIJREQCDk8j17KF5Os6JDqzDw3NRoW2NLYbmmWpq8rBniw9rHBjm/Qj0IzlVVuDTvFjb/AMWUa1rF7T25d9rqW7L+BveeIuL2/XqPqguvB7H2K+JZIoWGSaRkUY6vle2No9S8gLWWTcu7JhiXXtYe3ph1+1w+3HhebLPYndxzzSyv/NK9z3e7iSg2M1De+ytNDhNrNWWQA4joF1t5P5cwAsB9XBYTq3i7kPj0PS8HmG2NTcCRnlyrwnGe2ZD6KpUQepq+v6/rsol1S/PZ4TxRxuIbBEen7uFmIx+jV5aIgIiICIiAiIgIiICL3tB2luPcT2mhULa3FwvuWcxVGYyD85BLiPMNDj9Fcu2dg6Dt4xWZB9u1NuCLVhoDIXcj/d4eYb6nJ+ozhBg20fDS3eMOobgZLWo5a+OlzZasjr+9/Exh/wAx/wB3k43JBBXqww160UcMELGxwxRNDI42N5BrWjlhcqICIiAiIgIiICIiCUREEHqfVPr5oep9UygxXXNh7U1wySvq/Y7jySbOn8MLnOJyTJHgxuz5nhz9VW2r+Fe5qRe/TZK+pwDo1hFe1jzzFKeD2kPoryyiDVa5p+p6fJ8G/TtVZeeGWoZInHHmA8DIXWW180NexG6GxDFNE7k6OdjZIyPq14I/ksbvbC2NeLnP0iKB56OovkrY9GRn4f8AQg10RXTa8ItvvyamqalATnlO2Cw0enCIz/NeTL4P3R/ga7Wf/wC9Uli/0PegqxFZX9kW4P8Aaml+1v8A6aj+yLcH+1NK9rf/AEkFbIrSi8H77sfG1yqzv8KrNJ/qexepW8IdFZj7Zq+oTd/s0MFcH/P8RBTK5YK9q1K2GtBNPM/7scEb5JHejWAlbAUvDvYtMtd+zXWXt/HenmlB9YwWx/0LJqtOhRj+FSqVqsX/AJdWGOFntGAEFE6T4abw1EsfYgj02u7BL77sS8PnwwMzJn1DfVWNonhntXS+CW41+qWm4PFcaG1Q4ebazSW4/ic5ZvyTKCGtYxrGMa1rGNDWNaA1rWjkA0DkAvpRlTlARRlMoJRMqMoJRRlMoJRRlMoJRMplBKKMog5EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
                alt="Twitter"
              />
              <div>
                <img
                  className="h-6 w-8"
                  src="data:image/jpeg;base64,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"
                  alt="Facebook"
                />
              </div>
              <a href="https://www.instagram.com/akashpriyadarshi0007/">
                <img
                  className="h-6 w-8 "
                  src="data:image/jpeg;base64,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"
                  alt="Instagram"
                />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/akash-priyadarshi-22254a240/"
              >
                <img
                  className="h-6 w-7"
                  src="https://th.bing.com/th/id/OIP.4VTaUmIQtpxUnl8L6QLh4gHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"
                  alt="Linkdin"
                />
              </a>
              <img
                className="h-6 w-7"
                src="https://th.bing.com/th?q=YouTube+Logo+Black+White+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247"
                alt="Youtube"
              />
            </div>
          </div>
        </div>
        <div className="gap-[120px] flex flex-wrap">
          <div>
            <About
              About={"About"}
              Option1={"About Calendly"}
              Option2={"Cantact Sales"}
              Option3={"Newsroom"}
              Option4={"Careers"}
              Option5={"Security"}
            />
          </div>
          <div>
            <About
              About={"Solutions"}
              Option1={"Customer Support"}
              Option2={"Sales"}
              Option3={"Recruiting"}
              Option4={"Information Technology"}
              Option5={"Marketing"}
            />
          </div>
          <div>
            <About
              About={"Popular Features"}
              Option1={"Embed Calendly"}
              Option2={"Availability"}
              Option3={"Sending Notifications"}
              Option4={"Using Calendly Mobile"}
            />
          </div>
          <div>
            <About
              About={"Support"}
              Option1={"Help Center"}
              Option2={"Video Tutorials"}
            />
          </div>
          <div>
            <About
              About={"Add-Ons"}
              Option1={"Download for Chrome"}
              Option2={"Download for firebox"}
            />
          </div>
          <div>
            <About About={"Developers"} Option1={"Developer Tools"} />
          </div>
        </div>
      </div>
      <div className="flex justify-around mx-[75px] mt-9 mb-9">
        <p className="text-sm text-slate-500">Copyright Calendly 2024</p>
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-green-700 rounded-full mt-1"></div>
          <p className="text-sm text-slate-500">Calendly status</p>
        </div>
        <p className="text-sm text-slate-500">Privacy / Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
