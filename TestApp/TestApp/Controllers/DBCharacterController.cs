using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DBCharacterController : ControllerBase
    {


        public readonly TestappContext _ctx;


        public DBCharacterController(TestappContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<IEnumerable<Character>> Get()
        {
            return await _ctx.Characters.ToListAsync();
        }

    }
}
