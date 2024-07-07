package assignment.Assignment7;

public class Kid extends Mother {
	String name = "Suman";

	public static void main(String[] args) {
		Kid kid = new Kid();
		kid.study();
		
	}

	
	
	public void work() {
		System.out.println("My name is " + name + " and I am working in IT sector");
		System.out.println("My mothers name is " + super.name);
		/* Here I have casted one object to another cass object to access it */
		System.out.println("My grandmothers name is " + ((Grandma) this).name);
		System.out.println(this.name);
	}

	public void study() {
		work();
		System.out.println("I am also Preparing for Civil Services Examination");
		
	}

}
