using System;

namespace Sonar.Dotnet.Lint
{
    class Program
    {
        static void Main(string[] args)
        {
            var sum = Sum(10, 10);
            Console.WriteLine($"Sum: {Sum(10, 10)}");
        }

        public static int Sum(int a, int b) => a + b;
    }
}
