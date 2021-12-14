using System;
using System.Collections.Generic;

namespace TestApp.Models
{
    public partial class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Specie { get; set; } = null!;
        public string Gender { get; set; } = null!;
        public string Image { get; set; } = null!;
    }
}
