package golang

import "fmt"

func Hello(name string) string {
	return fmt.Sprintf("Hello, %s!", name)
}

func Add(x, y float64) float64 {
	return x + y
}

func Subtract(x, y float64) float64 {
	return x - y
}

func Multiply(x, y float64) float64 {
	return x * y
}

func Divide(x, y float64) float64 {
	if y != 0 {
		return x / y
	}
	return 0
}
