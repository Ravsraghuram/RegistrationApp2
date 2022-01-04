
using Microsoft.AspNetCore.Mvc;
using RegistrationApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        RegistrationRepository objform = new RegistrationRepository();

        [HttpPost]
        public int Create([FromBody] Registration registration)
        {
            return objform.AddRegForm(registration);
        }
    }
}
