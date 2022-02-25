package contact;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String lastname;
    @NotNull
    private String name;
    @NotNull
    private String gender;
    @NotNull
    private Date birth;


    public Person(PersonUpdatePayload account) {
        this.id = account.getId();
        this.lastname = account.getLastname();
        this.name = account.getName();
        this.gender = account.getGender();
        this.birth = account.getBirth();
    }

    public static class Builder
    {
        private int id;
        @NotNull
        private String lastname;
        @NotNull
        private String name;
        @NotNull
        private String gender;
        @NotNull
        private Date birth;

        public Builder setAccount_id(int id) {
            this.id = id;
            return this;
        }

        public Builder setLastname(String lastname) {
            this.lastname = lastname;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setGender(String gender) {
            this.gender = gender;
            return this;
        }

        public Builder setBirth(Date birth) {
            this.birth = birth;
            return this;
        }

        public Person build()
        {
            return new Person(id, lastname, name, gender, birth);
        }

    }
}
