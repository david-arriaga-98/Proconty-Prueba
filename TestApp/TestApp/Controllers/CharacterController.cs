using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestSharp;
using System.Text.Json;
using TestApp.Models;
using TestApp.Models.AppModel;

namespace TestApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {

        public readonly TestappContext _ctx;
        public readonly string _uri = @"https://rickandmortyapi.com/api/character/";

        public CharacterController(TestappContext ctx)
        {
            _ctx = ctx;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Character character)
        {
            _ctx.Characters.Add(character);
            await _ctx.SaveChangesAsync();
            return Ok(character);
        }

        [HttpGet(Name = "GetCharacter")]
        public IEnumerable<CharacterRAM> GetCharacters()
        {
            var client = new RestClient(_uri + "1,2,3,4,5");
            client.Timeout = -1;
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            var data = JsonSerializer.Deserialize<CharacterRAM[]>(response.Content);
            return data;
        }

    }
}
