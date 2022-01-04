using System;

using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationApp.Models
{
    public class RegistrationRepository
    {
        string Connectionstring = "Server=.\\SQLExpress;Database=FormData;Trusted_Connection=True;";

        public int AddRegForm(Registration registration)
        {
            try
            {
                SqlConnection con = new SqlConnection(Connectionstring);
                SqlCommand cmd = new SqlCommand("InsertForm", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@FirstName", registration.FirstName);
                cmd.Parameters.AddWithValue("@LastName", registration.LastName);
                cmd.Parameters.AddWithValue("@Gender", registration.Gender);
                cmd.Parameters.AddWithValue("@Phonenumber", registration.Phonenumber);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                return 1;
            }
            catch
            {
                return 0;
            }
        }
    }
}
