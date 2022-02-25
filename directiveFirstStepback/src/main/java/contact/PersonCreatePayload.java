package contact;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonCreatePayload {
    @NotNull
    private String lastname;
    @NotNull
    private String name;
    @NotNull
    private String gender;
    @NotNull
    private Date birth;
}
