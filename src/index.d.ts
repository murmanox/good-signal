declare interface Connection {
	disconnect(): void
}

/**
 * A signal with similar functionality to Roblox's built-in BindableEvents
 */
declare class Signal<T extends Array<unknown>> {
	/**
	 * Create a new Signal
	 */
	constructor()

	/**
	 * Connect a function to a signal to be ran when the signal is fired
	 * @param callback A callback function that's called every time the signal is fired
	 */
	connect(callback: (...args: T) => void): Connection

	/**
	 * Fire a signal, running all connected functions
	 * @param args The arguments to be passed to the connected function
	 */
	fire(...args: T): void

	/**
	 * Yield the current thread until the signal is fired
	 */
	wait(): void

	/**
	 * Disconnect all connections on this signal
	 */
	disconnectAll(): void
}

// declare interface SignalConstructor {
// 	new <T extends Array<unknown>>(): Signal<T>
// }

export = Signal
